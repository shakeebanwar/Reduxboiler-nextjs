import { connect } from 'react-redux';
import { decrementCounter, incrementCounter, saveObj } from '../redux/actions/counterActions';
import React, { useState, useEffect } from 'react'
import Router from 'next/router'

function button(props) {

    console.log("props===>", props)
    const [title, settitle] = useState("");



    useEffect(() => {

        console.log("navbar")
    
       
       
      }, [props.counter])

    const check = async () => {

        console.log("waiting")
        props.saveObj().then((e) => {
            console.log("object recieving",e)
            // Router.push({
            //     pathname: '/page1',



            // })
        })

       
}



return (
    <>
     

        <h1>{props.counter}</h1>
        <button onClick={props.incrementCounter}>Increment</button>
        <button onClick={props.decrementCounter}>Decrement</button>
        <button onClick={check}>My Function</button>


    </>
)
}


const mapStateToProps = state => ({


    counter: state.counter.value,
    authObj: state.counter.obj

});






const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
    saveObj: saveObj
};






export default connect(mapStateToProps, mapDispatchToProps)(button);
