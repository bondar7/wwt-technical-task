# WinWinTravel

## Task

### What needs to be done

- We have filter data that the API will send. They are located in
  the file `./src/temp/filterData.ts`
- Based on this design, you need to make a filter modal window - [figma](https://www.figma.com/file/cnBVURUTntc8peGEfKexoY/WWT-Test-task?type=design&node-id=0%3A1&mode=design&t=GZ0EY5BJ6KB7iy02-1)
- As for the design - make it similar to the layout.
  Regarding the indents that may slightly differ from each other on the
  layout - make them the same.

### More details

- The modal window should open by a button from the main page, close when
  clicking on the cross, or on the background of the modal window
- You need to do basic data saving in `App` in useState or zustand, at your
  discretion, with the type `SearchRequestFilter`
- Take data for display through react-query from the json file
- When opening the filter modal window, if there are already saved data that
  the user entered before - you need to display them
- The user should be able to enter data, and then click the `Apply` button.
  After that, he should open a confirmation form
  - If the user confirms - the data he selected should overwrite the data in `App`
  - If the user does not confirm, that is, says not to apply new changes, use old data
- Display on `App` the data that the user selected in the form of JSON
  (without design, just to see that everything works)
- Also, you can try minimizing re-renders using memorization and more proper approaches
- Think about developing this test as if you were working on a part of a big project

### What technologies to use

- Git with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Semantic layout - HTML 5
- `react`
- `react-query` - data fetching
- `Chakra UI` - ui library with all necessary ready-made components
- `i18n` - Internationalization
- `zustand` - State manager
- All other technologies that we have installed

### How to execute

- Make a fork
- Complete the task
- Add @ltlaitoff to the fork for review
- Write to the telegram chat or email that the task is completed

## Rules for accepting the task

1. **All** conditions of the task are fulfilled
2. More than one commit :)
3. The presence of passed github action, which checks the following:
   - Build - `npm run build`
   - Lint - `npm run lint:all`
   - Formatting - `npm run format:check:all`

## How to set up the project

All scripts described below (except for _**dependency installation**_) can be
used with **pnpm** instead of **npm**. They work the same way.

### Installing dependencies

After downloading the project's source code, you need to install the dependencies.
To do this, you can use the following command:

> Use **pnpm** here

```shell
pnpm i
# or
pnpm install
```

### Run

To start the project for development, use the script `dev`:

```shell
npm run dev
```

This script automatically refreshes the page after you make changes in the code and works quickly with `vite`.

### Build

To compile the project, use the script `build`:

```shell
npm run build
```

After executing this script, you will have a folder `dist` in which the project's output files will be located, which can be uploaded to hosting.

Also, to see how the compiled version of the program looks, you can use the script `preview`.

```shell
npm run preview
```
