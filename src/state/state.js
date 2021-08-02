let renderDOM = () => {}

const subscribe = observer => {
    renderDOM = observer
}

const state = {
    posts: {
        data: [
            'hi',
            'hello!'
        ],        
        addPostInputText: '',
        addPost: function (){
            this.data.push(this.addPostInputText);
            console.log(this.data)
            renderDOM()
        },
        changePostInputText: function(text){
            this.addPostInputText = text;
            renderDOM();
        }
    },
    users: ['Arthur', 'sadfjkd', 'sdfsdf']
}

export {state, subscribe}