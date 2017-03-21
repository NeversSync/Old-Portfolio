'use strict';

page('/home', homeController.showAll);
page('/about', aboutController.showAbout);
page('/projects', projectController.showProjects);

page();