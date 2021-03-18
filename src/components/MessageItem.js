import React, { useEffect } from 'react';
// this is where we will also import likes


const MessageItem = (props) => {
    return (
        <div className='MessageItem'>
            {/* this will go to a specific MessageItem
            and will also have the like comment */}
            <ol>
                <li>User 647: Baking cookies at 10 Am sooo kewl !!</li>
                <li>User 648: Its sooooo hotttt todayyyy</li>
                <li>User 649: Missing my boo boo</li>
                <li>User 650: i hate my sier shes so mean !</li>
                <li>User 651: living my best life </li>
            </ol>
        </div>
    )
}

export default MessageItem;