import {dirname} from "path";
globalThis.__dirname = dirname(import.meta.url);
import { createRequire } from 'module';
globalThis.require = createRequire(import.meta.url);

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var Module = (() => {
  var _scriptDir = import.meta.url;
  
  return (
function(Module = {})  {



  return Module.ready
}

);
})();
export default Module;