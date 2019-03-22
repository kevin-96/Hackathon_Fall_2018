var candidates = [
// candidate 1:
{characteristics : [0.75,0,0.5,0.75,1.5,1.5,-1], name: "Chris Murphy", desc: 'Christopher Scott Murphy is an American politician serving as the junior United States Senator from Connecticut since 2013. A member of the Democratic Party, he previously served in the United States House of Representatives, representing Connecticuts 5th congressional district from 2007 to 2013', party: 'Democrat', picture: '../assets/chrisphoto.png', url: 'murphy.html' },
// candidate 2:
{characteristics : [0,0.75,-0.75,-3,-0.75,0.5,0], name: "Matthew Corey", desc: 'Matthew Corey is a Republican candidate for the U.S. Senate from Connecticut. Corey is running in the general election on November 6, 2018, after advancing from the primary on August 14, 2018.', party: 'Republican', picture: '../assets/dickphoto.jpg', url: 'corey.html'},

// candidate 3:
{characteristics : [0.75,-1.5,0.75,1.5,1.5,0,-0.5], name: "Richard Lion", desc: 'Richard Lion is a Libertarian Party candidate for the U.S. Senate from Connecticut. Lion is running in the general election on November 6, 2018.', party: 'Libertarian', picture: '../assets/mattphoto.jpg', url: 'lion.html'},

// candidate 4:
{characteristics : [3,3,3,3,3,3,3], name: "Larry McLefty", desc: 'Larry McLefty is a hard leftist', party: 'Independent', picture: '../assets/larryphoto.jpg', url: '#'},

// candidate 5:
{characteristics : [-3,-3,-3,-3,-3,-3,-3], name: "Rachael McRighty", desc: 'Rachael McRight hard rightist', party: 'Independent', picture: '../assets/rachelphoto.jpg', url: '#'}

]

function getCandidates(){
  return candidates;
}
