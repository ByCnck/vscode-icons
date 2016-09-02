/* eslint-disable max-len */
exports.extensions = {
  supported: [
    { icon: 'actionscript', extensions: ['as'] },
    { icon: 'angular', extensions: [] },
    { icon: 'apache', extensions: ['htaccess', 'htpasswd'] },
    { icon: 'apib', extensions: ['apib'] },
    { icon: 'applescript', extensions: ['app'] },
    { icon: 'appveyor', extensions: ['appveyor.yml'], special: 'yml' },
    { icon: 'asp', extensions: ['asp'] },
    { icon: 'aspx', extensions: ['aspx'] },
    { icon: 'assembly', extensions: ['s', 'asm'] },
    { icon: 'autohotkey', extensions: ['ahk'] },
    { icon: 'babel', extensions: ['babelrc'] },
    { icon: 'binary', extensions: ['bin', 'o', 'a', 'exe', 'obj', 'lib', 'dll', 'so', 'pyc', 'pyd', 'pyo', 'n', 'ndll', 'pdb', 'cmo', 'cmx', 'cma', 'cmxa', 'cmi'] }, // http://www.file-extensions.org/filetype/extension/name/binary-files
    { icon: 'blade', extensions: ['.blade.php'], special: 'php' },
    { icon: 'bower', extensions: ['bowerrc'] },
    { icon: 'bower', extensions: ['bower'], special: 'json' },
    { icon: 'c++', extensions: ['cpp', 'hpp', 'cc', 'cxx'] },
    { icon: 'c', extensions: ['c'] },
    { icon: 'cake', extensions: ['cake'] },
    { icon: 'cfm', extensions: ['cfm', 'cfc', 'lucee'] },
    { icon: 'cheader', extensions: ['h'] },
    { icon: 'clojure', extensions: ['clojure', 'cjm', 'clj', 'cljs', 'cljc', 'edn'] },
    { icon: 'codeclimate', extensions: ['codeclimate.yml'], special: 'yml' },
    { icon: 'coffeescript', extensions: ['coffee'] },
    { icon: 'config', extensions: ['env', 'ini', 'makefile', 'config'] },
    { icon: 'compass', extensions: [] },
    { icon: 'composer', extensions: ['composer.json'], special: 'json' },
    { icon: 'composer', extensions: ['composer.lock'], special: 'lock' },
    { icon: 'cs', extensions: ['cs'] },
    { icon: 'cshtml', extensions: ['cshtml'] },
    { icon: 'csproj', extensions: ['csproj'] },
    { icon: 'css', extensions: ['css'] },
    { icon: 'csslint', extensions: ['csslintrc'] },
    { icon: 'cucumber', extensions: ['feature'] },
    { icon: 'dartlang', extensions: ['dart'] },
    { icon: 'dlang', extensions: ['d'] },
    { icon: 'docker', extensions: ['dockerfile'] },
    { icon: 'editorconfig', extensions: ['editorconfig'] },
    { icon: 'ejs', extensions: ['ejs'] },
    { icon: 'elixir', extensions: ['ex', 'exs', 'eex'] },
    { icon: 'elm', extensions: ['elm'] },
    { icon: 'erb', extensions: ['rhtml', 'erb'] },
    { icon: 'erlang', extensions: ['erl', 'hrl', 'emakefile', 'emakerfile'] },
    { icon: 'eslint', extensions: ['eslintrc', 'eslintignore'] },
    { icon: 'eslint', extensions: ['.eslintrc.js'], special: 'js' },
    { icon: 'eslint', extensions: ['.eslintrc.json'], special: 'json' },
    { icon: 'eslint', extensions: ['.eslintrc.yaml'], special: 'yaml' },
    { icon: 'eslint', extensions: ['.eslintrc.yml'], special: 'yml' },
    { icon: 'excel', extensions: ['xls', 'xlsx', 'csv', 'ods'] },
    { icon: 'favicon', extensions: ['favicon'], special: 'ico' },
    { icon: 'font', extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot', 'pfa', 'pfb', 'sfd'] },
    { icon: 'flash', extensions: ['swf', 'swc', 'sol'] },
    { icon: 'fsharp', extensions: ['fs', 'fsx', 'fsi'] },
    { icon: 'git', extensions: ['gitattributes', 'gitignore', 'gitmodules', 'gitkeep'] },
    { icon: 'go', extensions: ['go'] },
    { icon: 'gradle', extensions: ['gradle'] },
    { icon: 'graphviz', extensions: [] },
    { icon: 'groovy', extensions: ['groovy'] },
    { icon: 'gruntfile', extensions: ['gruntfile'], special: 'js' },
    { icon: 'gulpfile', extensions: ['gulpfile'], special: 'js' },
    { icon: 'haml', extensions: ['haml'] },
    { icon: 'handlebars', extensions: ['hbs', 'handlebars'] },
    { icon: 'haskell', extensions: ['has', 'hs', 'lhs', 'lit', 'gf'] },
    { icon: 'haxe', extensions: ['hx', 'hxml'] },
    { icon: 'haxe', extensions: ['haxelib'], special: 'json' },
    { icon: 'haxecheckstyle', extensions: ['checkstyle.json'], special: 'json' },
    { icon: 'haxedevelop', extensions: ['hxproj'] },
    { icon: 'html', extensions: ['htm', 'html'] },
    { icon: 'image', extensions: ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'ico'] },
    { icon: 'ionic', extensions: ['ionic'], special: 'project' },
    { icon: 'ionic', extensions: ['ionic.config'], special: 'json' },
    { icon: 'jade', extensions: ['jade', 'pug', 'jade-lintrc', 'pug-lintrc'] },
    { icon: 'jade', extensions: ['.jade-lint.json'], special: 'json' },
    { icon: 'jade', extensions: ['.pug-lintrc.js'], special: 'js' },
    { icon: 'jade', extensions: ['.pug-lintrc.json'], special: 'json' },
    { icon: 'java', extensions: ['java'] },
    { icon: 'js', extensions: ['js'] },
    { icon: 'jshintrc', extensions: ['jshintrc'] },
    { icon: 'jsmap', extensions: ['.js.map'], special: 'map' },
    { icon: 'jsp', extensions: ['jsp'] },
    { icon: 'julia', extensions: ['jl'] },
    { icon: 'log', extensions: ['log'] },
    { icon: 'less', extensions: ['less'] },
    { icon: 'license', extensions: ['license', 'enc'] },
    { icon: 'license', extensions: ['license.md'], special: 'md' },
    { icon: 'lisp', extensions: ['bil'] },
    { icon: 'lime', extensions: ['hxp'] },
    { icon: 'lime', extensions: ['include.xml'], special: 'xml' },
    { icon: 'lsl', extensions: ['lsl'] },
    { icon: 'lua', extensions: ['lua'] },
    { icon: 'm', extensions: ['m'] },
    { icon: 'markdown', extensions: ['md', 'markdown'] },
    { icon: 'marko', extensions: ['marko'] },
    { icon: 'markojs', extensions: ['.marko.js'], special: 'js' },
    { icon: 'markup', extensions: [] },
    { icon: 'matlab', extensions: ['fig', 'mat', 'mex', 'mexn', 'mexrs6', 'mn', 'mum', 'mx', 'mx3', 'rwd', 'slx', 'slddc', 'smv', 'tikz', 'xvc', 'xvc'] },
    { icon: 'mustache', extensions: ['mustache', 'mst'] },
    { icon: 'nim', extensions: ['nim', 'nims', 'cfg'] },
    { icon: 'node', extensions: ['json', 'webmanifest'] },
    { icon: 'node2', extensions: ['nvmrc'] },
    { icon: 'npm', extensions: ['npmignore'] },
    { icon: 'npm', extensions: ['package'], special: 'json' },
    { icon: 'nsi', extensions: ['nsi', 'nsh'] },
    { icon: 'nunjucks', extensions: ['njk', 'nunjucks', 'nunjs', 'nunj', 'njs', 'nj'] },
    { icon: 'ocaml', extensions: ['ml', 'mll', 'mli', 'mly', 'ocamlmakefile', 'merlin'] },
    { icon: 'paket', extensions: ['paket.dependencies'], special: 'dependencies' },
    { icon: 'paket', extensions: ['paket.lock'], special: 'lock' },
    { icon: 'paket', extensions: ['paket.references'], special: 'references' },
    { icon: 'paket', extensions: ['paket.template'], special: 'template' },
    { icon: 'paket', extensions: ['paket.local'], special: 'local' },
    { icon: 'patch', extensions: ['patch'] },
    { icon: 'perl', extensions: ['perl'] },
    { icon: 'poedit', extensions: ['po', 'mo'] },
    { icon: 'photoshop', extensions: ['psd'] },
    { icon: 'php', extensions: ['php', 'php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'] },
    { icon: 'phpunit', extensions: ['phpunit.xml'], special: 'xml' },
    { icon: 'procfile', extensions: ['procfile'] },
    { icon: 'postcss', extensions: ['pcss', 'postcss'] },
    { icon: 'powershell', extensions: ['ps1', 'psm1', 'psd1'] },
    { icon: 'puppet', extensions: ['epp'] },
    { icon: 'python', extensions: ['py', 'pyw'] },
    { icon: 'r', extensions: ['r'] },
    { icon: 'rails', extensions: [] },
    { icon: 'raml', extensions: ['raml'] },
    { icon: 'reactjs', extensions: ['jsx'] },
    { icon: 'reacttemplate', extensions: ['rt'] },
    { icon: 'reactts', extensions: ['tsx'] },
    { icon: 'riot', extensions: ['tag'] },
    { icon: 'robotframework', extensions: ['robot'] },
    { icon: 'ruby', extensions: ['rb', 'gemfile'] },
    { icon: 'ruby', extensions: ['gemfile'], special: 'lock' },
    { icon: 'rust', extensions: ['rs'] },
    { icon: 'sass', extensions: ['sass'] },
    { icon: 'scala', extensions: ['scala'] },
    { icon: 'scss', extensions: ['scss'] },
    { icon: 'settings', extensions: [] },
    { icon: 'shell', extensions: ['bat', 'sh', 'cmd', 'bash', 'zsh', 'fish'] },
    { icon: 'slim', extensions: [] },
    { icon: 'sln', extensions: ['sln'] },
    { icon: 'source', extensions: [] },
    { icon: 'sql', extensions: ['sql'] },
    { icon: 'sqlite', extensions: ['sqlite', 'db3'] },
    { icon: 'smarty', extensions: ['tpl', 'swig'] },
    { icon: 'stylelint', extensions: ['stylelintrc'] },
    { icon: 'stylelint', extensions: ['stylelint.config'], special: 'js' },
    { icon: 'stylus', extensions: ['styl'] },
    { icon: 'svg', extensions: ['svg'] },
    { icon: 'swift', extensions: ['swift'] },
    { icon: 'tcl', extensions: ['tcl'] },
    { icon: 'tex', extensions: ['texi', 'tex'] },
    { icon: 'text', extensions: ['txt'] },
    { icon: 'textile', extensions: ['textile'] },
    { icon: 'todo', extensions: ['todo'] },
    { icon: 'travis', extensions: ['travis.yml'], special: 'yml' },
    { icon: 'twig', extensions: ['twig'] },
    { icon: 'typescript', extensions: ['ts'] },
    { icon: 'typescriptdef', extensions: ['.d.ts'], special: 'ts' },
    { icon: 'volt', extensions: ['volt'] },
    { icon: 'vbhtml', extensions: ['vbhtml'] },
    { icon: 'vbproj', extensions: ['vbproj'] },
    { icon: 'vue', extensions: ['vue'] },
    { icon: 'vscode', extensions: ['vscodeignore', 'launch', 'tasks', 'jsconfig', 'tsconfig'], special: 'json' },
    { icon: 'xml', extensions: ['xml', 'axml', 'xaml', 'pex'] },
    { icon: 'yaml', extensions: ['yml', 'yaml'] },
    { icon: 'zip', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'] }
  ],
  parse: function () {
    var s = this.replace(/\./g, '_');
    if ((/^\d/).test(s)) return 'n' + s;
    return s;
  }
};
