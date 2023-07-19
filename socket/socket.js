const socketIO = require('socket.io')

// 소켓 통신을 할 경우 클라이언트가 접속할 경로
// 접속했을 때 발생할 이벤트, 에러, 클라이언트 메시지 ... 

                    // express server
module.exports = (server)=>{
    // express server와 연결, 클라이언트가 접속할 경로
    const io = socketIO(server,{path : '/socket.io'})

    // 클라이언트가 접속했을 때 → 콜백으로 소켓 객체 제공
    io.on('connection',(socket)=>{
        console.log('새로운 클라이언트 접속!',socket.id);

        socket.on('disconnect',()=>{ // 연결 종료 시
            console.log('클라이언트 접속 해제!', socket.id);
            clearInterval(socket.setInterval)
        })
        socket.on('error',(error)=>{ // 에러 발생 시
            console.log(error);
        })
        socket.on('reply',(data)=>{
            console.log(data);
        })
        // 서버쪽에서 먼저 이벤트를 발생(3초마다 메시지 보내기)
        setInterval(()=>{
            socket.emit('news','Hello Socket.io') // emit : 서버쪽에서 이벤트 발생
        },3000)
    })

}