const generateManager = (managerName, managerId, managerRoom, managerEmail) => {
  return `
    <section class="my-3" id="manger">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
      <div class="flex-row justify-space-between">
        <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="portfolio-item-title text-light">${managerName}</h3>
          <h5 class="portfolio-member">
            ID: ${managerId}
            <br>Email: <a href=mailto:${managerEmail}>${managerEmail}</a>
            <br>Office number: ${managerRoom}
          </h5>
        </div>
      </div>
    </section>
    `;
};

const generateTeam = teamArr => {
  return `
    <section class="my-3" id="portfolio">
    ${teamArr
      .filter(({ engineerName }) => engineerName)
      .map(({ engineerName, engineerId, engineerEmail, engineerGithub}) => {
        return `
          <h2 class="text-dark bg-primary p-2 display-inline-block">Engineer</h2>
          <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${engineerName}</h3>
              <h5 class="portfolio-member">
                ID: ${engineerId}<br>
                Email: <a href=mailto:${engineerEmail}>${engineerEmail}</a><br>
                Github: <a href=https://github.com/${engineerGithub}>${engineerGithub}</a>
              </h5>
            </div>
          </div>
          `;
        })
        .join('')}

    ${teamArr
      .filter(({ internName }) => internName)
      .map(({ internName, internId, internEmail, internSchool }) => {
        return `
          <h2 class="text-dark bg-primary p-2 display-inline-block">Intern</h2>
          <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${internName}</h3>
              <h5 class="portfolio-member">
                ID: ${internId}
                <br>Email: <a href=mailto:${internEmail}>${internEmail}</a>
                <br>School: ${internSchool}
              </h5>
            </div>
          </div>
          `;
        })
        .join('') }
    </section>
  `;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { managerName, managerId, managerRoom, managerEmail, members } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateManager(managerName, managerId, managerRoom, managerEmail)}
      ${generateTeam(members)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2023 by David Schwerd</h3>
    </footer>
  </body>
  </html>
  `;
};
