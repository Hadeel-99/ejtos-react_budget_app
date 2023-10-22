import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from 
                  <div className='col-sm'>
                        <Budget />
                    </div>    
    './components/Budget';

// Add code to import the other components here under
                // Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            <div className='col-sm'>
                        <Budget />
                    </div>
                        }        

                        {
                            /* Add Remaining component here*/
                        }        

                        {
                            /* Add ExpenseTotal component here */
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                        }         

                        {
                            /* Add ExpenseItem component here */
                        }        

                        {
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
