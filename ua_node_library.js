var fs = require('fs')
var UA = require("./API_Client.js")

var credentials = JSON.parse(fs.readFileSync('./keys.json', 'utf-8'))

var UA = require("./API_Client.js")

var DeviceType = UA.DeviceType
var Push = UA.Push
var Notification = UA.Notification
var Selector = UA.Selector
var Message = UA.Message
var Segment = UA.Segment
var Location = UA.Location

var client = new UA.API_Client(credentials.appKey, credentials.appSecret);
// var client = new UA.API_Client('LXpz7sNxTtSJkZDIutJmZw', 'jLfd3TjKSzejKNvon7aBiA')


// var client = new UA.API_Client('YPDu34kcS6q42ioANsv8KA', 'IXGz8cn_TdmnSJ44N6ssAg') // standard push example

/// Staging

////////////////////////////////
/// Handled

// Device Listing
    // client.getApids(displayResults)
    // client.getApid("c3800096-29ba-4453-8609-208a178c7ba1", displayResults)
    // client.getDeviceTokens(displayResults)
    // client.getDeviceToken('FFCADA8910C23390FA9220C462F12B23D446F236D0D3871277B63871CFBD279A', displayResults)


// Tags
    // client.getTags(displayResults)
    // client.createTag("library", displayResults)
    // client.deleteTag("library", displayResults)

// Segments
    // client.getSegments(displayResults);
    // client.getSegment('0180abda-db50-4eda-860a-aa74cfe4c90d', displayResults)
    // client.deleteSegment('682d62a6-ef11-4000-9a8e-b32d9aa9376c', displayResults)
    // client.changeSegment('287867ca-b603-46ae-b6fd-eac52ba1675b', seg, displayResults)
    // client.createSegment(seg, displayResults);

// Push
    // var n = new Notification(); n.setAlert("from API"); n.setDeviceType("all")
    // var p = new Push(); p.addNotification(n) 
    // client.sendPush(p, displayResults)

// Reports
    // client.getPushReport(new Date(2013,1,1), new Date(2013,6,5), 'MONTHLY', displayResults)
    // client.getPushReport(new Date(2012,0,1), new Date(2013,8,30), 'DAILY', displayResults)
    // client.getAppOpensReport(new Date(2012,0,1), new Date(2013,8,30), 'DAILY', displayResults)
    client.getTimeInAppReport(new Date(2012,0,1), new Date(2013,8,30), 'DAILY', displayResults)

//////////////////////////////////////////////////
/// Not Handled


// build audience

var s2 = new Selector('or')
    s2.addTag('notSnarf', true)

var s = new Selector('and')
    s.addTag('snarf')
        
    var l = new Location()
    l.setId("00xb78Jw3Zz1TyrjqRykN9")
    // l.setTimeAbsolute(new Date(2013,09,01), new Date(2013,12,01), "months")
    l.setTimeRelative(4, "months")
        
    // s.addLocation(l, true)

    s.addSelector(s2, true)

var seg = new Segment("API_test_with_Segments");
    seg.setCriteria(s);

// console.log(JSON.stringify(seg,null,4))

// client.getLocationFromString('Memphis,TN','city',displayResults);
// client.getLocationFromString('Memphis,TN',null,displayResults);
// client.getLocationFromString('92705', 'postalcode', displayResults);
// client.getLocationFromLatLong(37.7749295, -122.4194155, 'hasc', displayResults)
// client.getLocationFromAlias("CA", "us_state", displayResults)    

function displayResults(error, data) {
    
    console.log('///////////////////////////////////////////')
    console.log('Made it to the final callback')
    console.log('Error : ' + error)
    console.log('Status Code : ' + data.status_code)
    console.log('Data  : ' + data )
    console.log('Data String : ')
    console.log('--------------')
    console.log(JSON.stringify(data,null,2))
    
}

