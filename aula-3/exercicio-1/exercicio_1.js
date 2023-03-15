function addTextInList(){
    let li = document.createElement("li")
    li.innerText = document.getElementsByTagName("input")[0].value

    let list = document.getElementsByTagName("li")

    if (list.length === 0) {
        document.getElementById("list").append(li)
    } else {
        let end_of_list = list.length - 1
        for (let i = 0; i < list.length; i++) {
            if (i === end_of_list) {
                li.innerText <= list.item(i).innerText ? list.item(i).before(li) : list.item(i).after(li)
                break
            } else if (li.innerText.toLowerCase() <= list.item(i).innerText.toLowerCase()) {
                list.item(i).before(li)
                break
            }
        }
    }
}

document.getElementsByTagName("button")[0].addEventListener("click", addTextInList)
