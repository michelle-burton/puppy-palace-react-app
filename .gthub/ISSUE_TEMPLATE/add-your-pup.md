name: Add My Pup 🐶
description: Request help or guidance on adding your dog to the Puppy Palace
title: "Add [Dog Name] to the Gallery"
labels: ["contribution", "good first issue"]
body:
  - type: input
    id: name
    attributes:
      label: Your Name
      placeholder: e.g. Michelle
    validations:
      required: true

  - type: input
    id: dog-name
    attributes:
      label: Your Dog’s Name
      placeholder: e.g. Rockette
    validations:
      required: true

  - type: textarea
    id: caption
    attributes:
      label: Your Dog’s Caption
      description: Add a fun description for your dog
      placeholder: e.g. "Rockette is my coding companion who loves snacks and TypeScript."
    validations:
      required: true

  - type: dropdown
    id: image-ready
    attributes:
      label: Have you added a dog image under 300KB to `public/dogs/`?
      options:
        - Yes, it's ready!
        - Not yet, I need help.
    validations:
      required: true

  - type: checkboxes
    id: confirm
    attributes:
      label: Final Checklist
      options:
        - label: I followed the contribution instructions in `README.md`
          required: true
        - label: I’m excited to join the Puppy Palace! 🐾
          required: true
