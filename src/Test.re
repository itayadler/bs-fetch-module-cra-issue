let test = () => {
  let fetchOptions = Fetch.RequestInit.make(~method_=Fetch.Post, ~credentials=Fetch.Include, ());
  let client =
    ReasonUrql.Client.make(~url="", ~fetchOptions=ReasonUrql.Client.FetchOpts(fetchOptions), ());
  Js.log(client);
  client;
};
