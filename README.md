# json-fill-export-app

I want to create a web-app for filling in and exporting json files following a template. 
An example of a json following the template is given here:

{
	"classes":
	[
		"class1",
		"class2"
	],
	"limit": 15,
	"surface_area": 3,
	"family_traits":
	{
		"long_tail": "yes",
		"ground_dwelling": yes",
	 },
 }
The app has 2 tabs:
tab 1) In this tab, there is a webform for filling out a json. "classes" should be filled with a dropdown menu with options class1, class2 and class3. When one entry has been added with the dropdown menu, the value is added to the list and displayed and the dropdown meny appears again so the user can append more entries to the list.
Limit is entered with free text, but must be a positive integer.
Surface area is a slider from 1-30
long tail and ground dwelling are check boxes.

tab2) the json is displayed and there is a button offering the user to save the json to disk.

The application should be modern looking and visually pleasing

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/json-fill-export-app.git
cd json-fill-export-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
