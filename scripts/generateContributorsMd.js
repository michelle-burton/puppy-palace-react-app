const fs = require('fs');
const path = require('path');

const contributorsPath = path.join(__dirname, '../public/contributors.json');
const outputPath = path.join(__dirname, '../CONTRIBUTORS.md');

const contributors = JSON.parse(fs.readFileSync(contributorsPath, 'utf-8'));

const content = `
# 🐾 Puppy Palace Contributors

Welcome to the Puppy Palace hall of fame! These amazing humans and their pups have helped grow the cutest open source project on GitHub 🐶✨

---

${contributors
  .map((contributor) => {
    return `### 🐶 ${contributor.name}
<img src="${contributor.image}" alt="${contributor.name}" width="150"/>

> ${contributor.caption}

[View Human on GitHub](${contributor.github})
`;
  })
  .join('\n---\n')}

---

Want to be featured here?

👉 [Contribute to the project](./README.md#how-to-contribute)
`;

fs.writeFileSync(outputPath, content.trim());

console.log('✅ CONTRIBUTORS.md updated!');
