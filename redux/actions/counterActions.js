//Action Types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const auth = "AUTH";


//Action Creator
export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});

export const saveObj = () => dispatch => {
    return new Promise((resolve, reject) => {

        try{
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
    
            fetch("https://api.clearpricing.health/landingpageData", requestOptions)
    
                .then(response => response.json())
                .then(result => {
                    dispatch({
                        type: auth,
                        payload: result
                    });
                    resolve({ obj: result });
              
                })
    
                .catch(error => {
                    
                    reject(error)
            
                   
                });

            
        }

        catch(error){
            reject(error)

        }
        
    })
};

