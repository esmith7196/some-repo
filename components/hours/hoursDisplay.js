import React, { useId } from 'react';
import { prettyPrintDay, formatTime } from '../../helpers/hours';
import Body from '../ui/Body';

// todo: Refactor this entire component, it works for now though.
// todo: run all of this script and store in context / graphql. Then just do the render methods here.
const HoursDisplay = ({ hours, isContact, center = false }) => {
  const days = Object.keys(hours);

  // Function that builds an array of all hour labels for business and filters out the duplicates
  const uniqueHourLabels = days
    .map(day => hours[day].map(hourBlock => hourBlock.name))
    .flat()
    .filter((label, idx, arr) => arr.indexOf(label) === idx);

  const buildHoursObject = uniqueHourLabels.reduce((acc, label) => {
    // If there is no label yet in the object, add it

    if (!acc[label]) {
      // Assign the object key to

      acc[label] = [];
    }

    // If there IS a label already inside of the acc, we must then begin populating it with respected hours

    if (acc[label]) {
      acc[label] = [
        ...days
          .map(day =>
            hours[day]
              .filter(hourBlock => hourBlock.name === label)
              .map(hourBlock => hourBlock)
              .flat()
              .map(el => ({
                ...el,
                day: prettyPrintDay[day],
              }))
          )
          .flat(),
      ];
    }
    return acc;
  }, {});

  const combineEqualHours = hours => {
    if (hours.length === 1) {
      return [
        {
          [hours[0].name]: {
            day: hours.map(({ day }) => day),
            open: hours[0].open,
            close: hours[0].close,
            name: hours[0].name,
          },
        },
      ];
    } else {
      return hours.reduce((acc, cur) => {
        if (!acc.length) {
          acc[0] = {
            [cur.name]: [
              {
                day: [cur.day],
                open: cur.open,
                close: cur.close,
                name: cur.name,
              },
            ],
          };
        } else {
          if (
            acc[0][cur.name].some(
              el => el.close === cur.close && el.open === cur.open
            )
          ) {
            const found = acc[0][cur.name].find(
              el => el.open === cur.open && el.close === cur.close
            );
            found.day.push(cur.day);
          } else {
            acc[0][cur.name].push({
              day: [cur.day],
              open: cur.open,
              close: cur.close,
              name: cur.name,
            });
          }
        }
        // return an array with the correct keys
        return acc;
      }, []);
    }
  };

  const combineSimilarHours = () => {
    const hourTypes = Object.keys(buildHoursObject);
    const hoursFromObject = hourTypes.map(label =>
      buildHoursObject[label].map(hours => hours)
    );

    return hoursFromObject.map(hourObj => combineEqualHours(hourObj)[0]);
  };
  const renderFormattedHours = () => {
    const hourTypes = Object.keys(combineSimilarHours());

    if (hourTypes.length === 0) {
      return <div className="text-dark">closed</div>;
    } else {
      return hourTypes.map(label => {
        const hourWithLabel = combineSimilarHours()[label];
        const hourTitle = Object.keys(hourWithLabel)[0];
        const abc = hourWithLabel[hourTitle];

        return (
          <>
            <h4 className="typelabel">
              {hourTitle === 'null' ? '' : hourTitle}
            </h4>

            {Array.isArray(abc) ? (
              <>
                {abc.map((obj, idx) => (
                  <React.Fragment key={`${obj.day}-${idx}`}>
                    <div className="dayContainer mb-3">
                      {obj.day.length === 7 ? (
                        <span className="day text-xl">Every day</span>
                      ) : (
                        obj.day.map((day, idx) => (
                          <span className="day text-xl" key={`${day}-${idx}-2`}>
                            {day}
                            {obj.day.length - 1 === idx ? ':' : ','}{' '}
                          </span>
                        ))
                      )}
                      <p className="time">
                        <span>{formatTime(obj.open)} - </span>
                        <span>{formatTime(obj.close)} </span>
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </>
            ) : (
              // <p>{abc.open}</p>
              ''
            )}
          </>
        );
      });
    }
  };

  return (
    <div className={` innerHoursContainer ${center && 'text-center mb-12'}`}>
      {renderFormattedHours()}
    </div>
  );
};

export default HoursDisplay;
