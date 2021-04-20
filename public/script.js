/* eslint-disable max-len */
async function getData() {
  const request = await fetch('/api/war/custom');
  const data = await request.json();
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
    event.preventDefault();
    console.log(search.value);
    const filtered = countryData.filter((record) => record.country_name.includes(search.value));
    console.log(filtered);
    filtered.forEach((item) => {
      if (filtered.indexOf(item) % 2 === 0) {
        const appendItem = document.createElement('div');
        appendItem.classList.add('container', 'right');
        appendItem.innerHTML = `
        <div class="content">
            <h2>${item.war_name}</h2>
            <p>Duration: ${item.start_date} - ${item.end_date}</p>
            <p>(${item.duration} Days)</p>
        </div>`;
        timeLine.append(appendItem);
      } else {
        const appendItem = document.createElement('div');
        appendItem.classList.add('container', 'left');
        appendItem.innerHTML = `
          <div class="content">
              <h2>${item.war_name}</h2>
              <p>Duration: ${item.start_date} - ${item.end_date}</p>
              <p>(${item.duration} Days)</p>
          </div>`;
        timeLine.append(appendItem);
      }
    });
  });
}

async function windowsAction() {
  dataHandler();
  console.log('Window Loaded');
}

window.onload = windowsAction;