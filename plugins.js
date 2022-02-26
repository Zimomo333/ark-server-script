const fs = require('fs');

const maps = [
    'Aberration',
    'Crystal',
    'Extinction',
    'Genesis',
    'Genesis2',
    'LostIsland',
    'Ragnarok',
    'ScorchedEarth',
    'TheCenter',
    'TheIsland',
    'TheIslandPVP',
    'Valguero',
]
maps.forEach(map=>{
    fs.cpSync('C:/Users/Administrator/server/MyPlugin', `C:/Users/Administrator/server/arkServer/Servers/${map}/ShooterGame/Binaries/Win64`, { recursive: true });
})
