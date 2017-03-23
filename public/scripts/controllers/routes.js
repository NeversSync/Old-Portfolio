'use strict';

page('/home', homeController.showAll);
page('/about', aboutController.index);
page('/projects', projectController.showProjects);

page();