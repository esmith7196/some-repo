export default (tag, stories = []) =>
  stories.find(story => story.tags.includes(tag));
