// this is setTimeout callback hell 

setTimeout(function() {
    console.log(`hi after 1 sec from callback hell`)
    setTimeout(function() {
        console.log(`hi after 2 sec from callback hell`)
        setTimeout(function() {
            console.log(`hi after 3 sec from callback hell`)
        },3000)
    },2000)
},1000)

// this get rid of this we can different approach this isn't callback hell 

function taskthree(){
    console.log(`hi after 3 sec`)
}

function taskTwo(){
    console.log(`hi after 2 sec`)
    setTimeout(taskthree,3000)
}

function taskOne(){
    console.log(`hi after 1 sec`)
    setTimeout(taskTwo,2000)
}

setTimeout(taskOne,1000)

// this is Promisified setTimeout approach 

function PromisifiedApproach(timeout){
    return new Promise(function(resolve) {
        setTimeout(resolve,timeout)
    })
}
// this is chaining Promises 
PromisifiedApproach(1000)
.then(() => {
    console.log(`hey there after 1 sec from promise `)
    return PromisifiedApproach(3000)
})
.then(() => {
    console.log(`hey there after 3 sec from promise `)
    return PromisifiedApproach(5000)
})
.then(() => {
    console.log(`hey there after 5 sec from promise `)
})