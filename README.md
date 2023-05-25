## Evaluating the Language-Based Security for Plugin Development in VScode development

This repo is for evaluating the language-Based Security for Plugin Development. The developing environment is based on VScode and employs JavaScipt mainly.

## Objectives
* Developing VScode extensions that try to access files, network, other parts of the application that plugin user does not expect.
* Exploring the CVE that take advantage of similar capability- based accesses and implementing them as VScode extension exploits.
* Analysis of which of these can be addressed by languages that support capability-based module systems like Wyvern.


## Plugin Installation
1. Install plugins manually:
- First git clone the repo to local computer
- Open any one of plugins
- Navigate to <kbd>Run and Debug</kbd> > <kbd>Run extension</kbd>
![vscoderun](/screenshots/vscoderun.png)

2. Install plugins from marketplace:
- Using IDE built-in plugin system:
  - <kbd>Market place</kbd> > <kbd>Search for the plugin</kbd> > <kbd>Install Plugin</kbd>

![vscodePlugin](/screenshots/vscodePlugin.png)





