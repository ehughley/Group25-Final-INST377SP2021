/* eslint-disable max-len */
async function getData() {
  const request = await fetch('/api/war/custom');
  const data = await request.json();
  const formRequest = await fetch('/api/wars');
  const formData = await request.json();
  return data;
}

async function dataHandler() {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const timeLine = document.querySelector('.timeline');
  // const leftList = document.querySelector('.container left');

  // const request = await fetch('/api/Countries');
  const countryData = await getData();
  console.table(countryData);

  form.addEventListener('submit', async(event) => {
    while (search.value === 0) {
      document.getElementById('clear').innerHTML = '';
    }
    event.preventDefault();
    console.log(search.value);
    const filtered = countryData.filter((record) => record.country_name.toLowerCase().includes(search.value.toLowerCase()));
    console.log(filtered);
    filtered.forEach((item) => {
      if (filtered.indexOf(item) % 2 === 0) {
        const appendItem = document.createElement('div');
        appendItem.classList.add('containers', 'left');
        appendItem.innerHTML = `
        <div class="contents" id="clear">
            <h3>${item.war_name}</h3>
            <p>Duration:            ${item.start_date} - ${item.end_date}</p>
            <p>Days of Conflict:    ${item.duration} Days</p>
            <p>Number of Deaths:    ${item.battle_deaths}</p>
        </div>`;
        timeLine.append(appendItem);
      } else {
        const appendItem = document.createElement('div');
        appendItem.classList.add('containers', 'right');
        appendItem.innerHTML = `
          <div class="contents" id="clear">
              <h3>${item.war_name}</h3>
              <p>Duration:            ${item.start_date} - ${item.end_date}</p>
              <p>Days of Conflict:    ${item.duration} Days</p>
              <p>Number of Deaths:    ${item.battle_deaths}</p>
          </div>`;
        timeLine.append(appendItem);
      }
    });
  });
  document.addEventListener('click', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const {target} = el.dataset;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
}

async function formData() {
  const formRequest = await fetch('/api/wars');
  const formData = await request.json();
  return formData;
}

async function dataEntry() {
  ('form#warPost').submit((e) => {
    e.preventDefault();

    const form = $(this);
    const jsonvideoFormData = utils.serializeToJSON(form);
    const xhrData = _.pick(jsonvideoFormData, 'video_url', 'artist_id', 'type');

    api.post('/api/wars', xhrData, (response) => {
      alert('Video has been added!');
    });
  });
}
async function windowsAction() {
  dataHandler();
  console.log('Window Loaded');
}

window.onload = windowsAction;