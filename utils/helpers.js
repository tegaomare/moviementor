// Helper function to format text to title case
Handlebars.registerHelper("formatTitleCase", function (text) {
  if (typeof text !== "string") {
    return "";
  }

  return text.replace(/\b\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
});
