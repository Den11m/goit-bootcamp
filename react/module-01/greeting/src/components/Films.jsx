import React from 'react';
import './Films.css'
import Button from '../ui/button';
import Input from '../ui/input';
import InputMy from '../components/Exemple';


const FilmItem = ({name, src}) => (
    <div className="film">
        <div className="film__name">
            {name}
        </div>
        <iframe title={name}
                width="560"
                height="315"
                src={src}
                frameBorder="0"
                // allow="autoplay; encrypted-media"
                allowFullScreen>
        </iframe>
    </div>
);

export default class Films extends React.Component {
    state = {
        notFavorite: [{
            id: 'b001',
            name: 'Robin Hood',
            src: "https://www.youtube.com/embed/F5B9jmB_4oM"
        }, {
            id: 'b002',
            name: 'You Were Never Really Here',
            src: "https://www.youtube.com/embed/R8oYYg75Qvg"
        }, {
            id: 'b003',
            name: 'SCORN',
            src: "https://www.youtube.com/embed/BKTkCa5nB_8"
        }],
        Favorite: [{
            id: 'g001',
            name: 'Shot Caller',
            src: "https://www.youtube.com/embed/tEyNo2z7IUY"
        }, {
            id: 'g002',
            name: 'The Last Samurai',
            src: "https://www.youtube.com/embed/T50_qHEOahQ"
        }, {
            id: 'g003',
            name: 'Sherlock Holmes',
            src: "https://www.youtube.com/embed/iKUzhzustok"
        }],
        active: 'Favorite',
        id: '',
        name: '',
        src: 'https://www.youtube.com/embed/oQCyZKsT82M',
    };
    changeFilm(active){
        this.setState({
            active
        })
    };

    ChangeInput = (field, e) =>{
        const value = e.target.value;
        this.setState({
            [field]: value,
        })
    };

    addFilm = () => {
        this.setState((prevState)=>({
        [this.state.active]: [...prevState[this.state.active],{
            name: prevState.name,
            src: prevState.src,
            id: prevState.name,
        }]
        }))
    };

    render() {
        const films = this.state[this.state.active];
        // console.log(this.state);
        return (
            <div className="films__wrapper">
                <h2>My {this.state.active} Films</h2>
                <button onClick={this.changeFilm.bind(this, "Favorite")}>Favorite</button>
                <button onClick={this.changeFilm.bind(this, "notFavorite")}>NotFavorite</button>
                <div>
                    <div>
                        film:
                        <Input type="text"
                               value={this.state.name}
                               className="film__name__input"
                               placeholder="name"
                               onChange={this.ChangeInput.bind(this, "name")}
                        />
                    </div>
                    <div>
                        url:
                        <Input type="text"
                               value={this.state.src}
                               className="film__src__input"
                               placeholder="https://www."
                               onChange={this.ChangeInput.bind(this, "src")}
                        />
                        <div>
                            test:
                        <Input  value="" placeholder=""/>
                        </div>
                        <div>
                            test_2:
                            <InputMy  value="" placeholder=""/>
                        </div>
                    </div>
                    <Button className="film__add"
                            onClick={this.addFilm}
                    >
                        Add Film
                    </Button>
                </div>
                {films.map((film) => <FilmItem key={film.id} {...film} />)}
            </div>
        )
    }
}
