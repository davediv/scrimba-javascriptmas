function transformData(data) {
    let result = []

    data.forEach(el => {
        let dateFormat = new Date(el.dob.date).toDateString()
        let tmp = {fullName: `${el.name.first} ${el.name.last}`, birthday: `${dateFormat}`}
        result.push(tmp)
    })

    return result;
}

console.log(transformData(userData));