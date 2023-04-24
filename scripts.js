const greenEndTokensUrl = 'green_end/design_tokens.json';
const serenityHavenTokensUrl = 'serenity_haven/design_tokens.json';

fetch(greenEndTokensUrl)
  .then(response => response.json())
  .then(tokens => {
    // Use the Green End design tokens here
    console.log('Green End Tokens:', tokens);
  });

fetch(serenityHavenTokensUrl)
  .then(response => response.json())
  .then(tokens => {
    // Use the Serenity Haven design tokens here
    console.log('Serenity Haven Tokens:', tokens);
  });
