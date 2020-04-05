let questions_array = [];
let num_of_likes = 0;
let comment_form_loaded = false; 
function addToQuestions() {
    let form_title = document.getElementById('form_title').value;
    let form_body = document.getElementById('form_body').value;
    let question_obj = {
        question_title: form_title,
        question_body: form_body,
        num_of_likes: num_of_likes,
        comments: [],
        num_of_comments: 0
    }
    
    questions_array.push(question_obj);
    console.log(questions_array);
    // the title and body of the qns
    let quest_title = document.createElement("h5");
    let quest_body = document.createElement("p");
    // the like button-span
    let quest_like_button = document.createElement("span");
    // or el.setAttribute('id', 'like_button_span')
    quest_like_button.id = "like_button_span";
    let quest_comment_button = document.createElement("span");
    // the button that displays the div below
    let comments_button = document.createElement("span");

    // let likes_span = document.createElement("span")
    // the comments div
    let comment_para = document.createElement("div");
    comment_para.setAttribute('id', 'comments_div');


    questions_array.forEach(function(item, index) {
        quest_title.textContent = item.question_title
        quest_body.textContent = item.question_body
        quest_like_button.textContent = "Like "
        quest_comment_button.textContent = "Comment"
        //   
      })
    document.getElementById("questions").appendChild(quest_title);
    document.getElementById("questions").appendChild(quest_body);
    document.getElementById("questions").appendChild(quest_like_button);
    document.getElementById("questions").appendChild(quest_comment_button);
    document.getElementById("questions").appendChild(comments_button)
    // try
    document.getElementById("questions").appendChild(comment_para)
    //
    quest_like_button.addEventListener('click',function(){
        ++question_obj.num_of_likes
        quest_like_button.textContent = "Likes " + question_obj.num_of_likes;
        
        // WHY DOESN'T THIS CONDITION BELOW WORK

        // if (question_obj.num_of_likes = 1){
        //     quest_like_button.textContent = "Like " + 1
        // }
        // if (question_obj.num_of_likes > 1) {
        //     quest_like_button.textContent = "Likes " + question_obj.num_of_likes
        // }
        
        console.log("clicked Like button " + question_obj.num_of_likes)
    })
    quest_comment_button.addEventListener('click',function(){
        let comment_input = document.createElement("textarea");
        comment_input.id = "comment_textarea"
        let comment_input_button = document.createElement("button");
        comment_input_button.setAttribute('id', 'post_comment_button');
        comment_input_button.textContent = "Post Comment";
        
        if(comment_form_loaded === false){
            document.getElementById("questions").appendChild(comment_input);
            document.getElementById("questions").appendChild(comment_input_button);
            comment_form_loaded = !comment_form_loaded;    
        }
        // document.getElementById("questions").appendChild(comment_input);
        // document.getElementById("questions").appendChild(comment_input_button);
        //comment_form_loaded = !comment_form_loaded;
        //let one_comment = document.getElementById("one_comment")
        if(document.getElementById("comments_div") !== null){
            //one_comment.remove()
            // As long as <ul> has a child node, remove it
            while (comment_para.hasChildNodes()) {  
                comment_para.removeChild(comment_para.firstChild);
            }
        }
        comment_input_button.addEventListener('click', function(){
            let posted_comment = document.getElementById("comment_textarea").value;
            let comment_obj = {
                comment_body: posted_comment
            }
            question_obj.comments.push(comment_obj);
            question_obj.num_of_comments = question_obj.comments.length
            comments_button.textContent = "comments " + question_obj.num_of_comments;
            console.log(question_obj.comments);
            comment_form_loaded = !comment_form_loaded;
            document.getElementById("comment_textarea").remove();
            document.getElementById("post_comment_button").remove();
            
        })
        
    })
    comments_button.addEventListener('click', function(){
        question_obj.comments.forEach(element => {
            console.log(element)
            // if (comment_para.hasChildNodes() == true) {
            //     return false
            // }
            if (comment_para.childElementCount !== question_obj.comments.length) {
                //return false;
                comment_para.innerHTML += `<p id = "one_comment">${element.comment_body}</p>`;
            }
            return false
            //comment_para.innerHTML += `<p id = "one_comment">${element.comment_body}</p>`;
            //document.getElementById("questions").appendChild(comment_para)
        })
    })

}

