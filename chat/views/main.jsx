// import React from 'react';

// function Main({ state, rooms }) {
//   return (
//     <div>
//       <h1>거지의 꿈 채팅방~</h1>

//       {state === '' ? (
//         <form action="user/login" method="post">
//           <input type="text" name="id" />
//           <input type="password" name="pw" />
//           <input type="submit" value="LOGIN" />
//         </form>
//       ) : (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>방제목</th>
//               <th>입장</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rooms.map(room => (
//               <tr key={room.roomid}>
//                 <td>{room.title}</td>
//                 <td>
//                   <button onClick={() => (window.location.href = `/room/${room.roomid}`)}>
//                     입장
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default Main;



const React = require('react');

function Main({ state, rooms }) {
  return (
    React.createElement('div', null,
      React.createElement('h1', null, '거지의 꿈 채팅방~'),
      state === '' ? (
        React.createElement('form', { action: 'user/login', method: 'post' },
          React.createElement('input', { type: 'text', name: 'id' }),
          React.createElement('input', { type: 'password', name: 'pw' }),
          React.createElement('input', { type: 'submit', value: 'LOGIN' })
        )
      ) : (
        React.createElement('table', { border: '1' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', null, '방제목'),
              React.createElement('th', null, '입장')
            )
          ),
          React.createElement('tbody', null,
            rooms.map(room => (
              React.createElement('tr', { key: room.roomid },
                React.createElement('td', null, room.title),
                React.createElement('td', null,
                  React.createElement('button', { onClick: () => window.location.href = `/room/${room.roomid}` }, '입장')
                )
              )
            ))
          )
        )
      )
    )
  );
}

module.exports = Main;
