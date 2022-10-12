export default (tag, stories = []) =>
  stories.filter(story => story.tags.includes(tag));
