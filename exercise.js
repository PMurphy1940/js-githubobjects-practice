console.log(githubData[6].payload.commits[0].message)



for (let i = 0; i < githubData.length; i++) {
    if (githubData[i].id == 8030403992) {
        var author = githubData[i].payload.commits[0].author.name
        var commitMsg = githubData[i].payload.commits[0].message
        var date = githubData[i].created_at
        var day = date.slice(0, 9)
        var time = date.slice(11, 19)
        break
    }

}

console.log(`${author} created the commit message "${commitMsg}" at ${time} on ${day}`)