// $(function(){
//    $("#faq h3").click(function(){
//     $(this).parent().addClass("open").siblings().removeClass("open")
//    })
// })

window.addEventListener('load', function(){
    document.querySelectorAll("#faq h3").forEach(function(ele, idx){
        ele.addEventListener('click', function(){
            this.parentElement.classList.add('open')

            let siblings = this.parentElement.parentElement.children;
            //부모태그까지 포함된 상태
            // console.log(
            //     " 데이터 : " + siblings, 
            //     " 데이터타입 : " +  typeof siblings, 
            //     " 정렬인가? : " +   Array.isArray(siblings),
            //     " 키보여줘 : " + Object.keys(siblings)
            //   )
            // 실력자라면 forEach 대신에 for of 쓰기
            for(let sibling of siblings){ // for of array아니면서 array형 데이터에서 쓴다.
                if (sibling !== this.parentElement)
                sibling.classList.remove('open')
            }
        })
    })
})