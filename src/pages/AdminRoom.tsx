

import { useParams, Link } from 'react-router-dom';

import logoImg from '../assets/images/teste.svg';
import { Button } from '../components/Button';
import { Questions } from '../components/Questions/index';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss';


type RoomParams = {
    id: string;
}


export function AdminRoom() {
    // const { user } = useAuth();
    const params = useParams<RoomParams>();


    const roomId = params.id;

    const { title, questions } = useRoom(roomId)







    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <Link to="/">
                        <img src={logoImg} alt="Se tu dix" />
                    </Link>
                    <div>
                        <RoomCode code={params.id} />
                        <Button isOutlined >Encerra Sala</Button>
                    </div>

                </div>
            </header >

            <main>
                <div className="room-title">
                    <h1>{title}</h1>
                    {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
                </div>



                <div>
                    {questions.map(question => {
                        return (
                            <Questions
                                key={question.id}
                                content={question.content}
                                author={question.author}

                            />
                        )
                    })}
                </div>

            </main>

        </div >
    )


}


