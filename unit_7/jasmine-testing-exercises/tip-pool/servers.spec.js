describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should do nothing if server name input is empty", function () {
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should have a server added to the servers table", function () {
    submitServerInfo();
    const tipAverage =
      sumPaymentTotal("tipAmt") / Object.keys(allServers).length;
    const servers = serverTbody.children;

    expect(servers).toHaveSize(1);

    const serverEntry = servers[0].children;

    expect(serverEntry && serverEntry[0].innerText).toEqual("Alice");
    expect(serverEntry && serverEntry[1].innerText).toEqual(
      `$${tipAverage.toFixed(2)}`
    );
  });

  afterEach(function () {
    // Reset servers list and id generator
    allServers = {};
    serverId = 0;
    // Clean up servers table in the DOM
    serverTbody.innerHTML = "";
  });
});
