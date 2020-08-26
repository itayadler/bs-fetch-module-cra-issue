

import * as Fetch from "bs-fetch/src/Fetch.js";
import * as Client$ReasonUrql from "reason-urql/src/Client.bs.js";

function test(param) {
  var fetchOptions = Fetch.RequestInit.make(/* Post */2, undefined, undefined, undefined, undefined, undefined, /* Include */2, undefined, undefined, undefined, undefined, undefined)(undefined);
  var client = Client$ReasonUrql.make("", {
        TAG: /* FetchOpts */0,
        _0: fetchOptions
      }, undefined, undefined, undefined, undefined, undefined);
  console.log(client);
  return client;
}

export {
  test ,
  
}
/* Client-ReasonUrql Not a pure module */
