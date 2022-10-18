var comps = readline()
var points = readline().split(" ")

var n = comps.split(" ")[0]
var k = comps.split(" ")[1]
var count = 0


for(var i = 0; i < n; i++){
    if(parseInt(points[i]) >= parseInt(points[k - 1]) && parseInt(points[i]) > 0){
        count++
    }
}
print(count)