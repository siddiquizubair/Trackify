import React from 'react';
import '../App.css';

export default class Artists extends React.Component {
    constructor () {
        super();

        this.revealShort = this.revealShort.bind(this);
        this.revealMedium = this.revealMedium.bind(this);
        this.revealLong = this.revealLong.bind(this);
    }

    revealShort () {
        document.getElementById('short').style.display = 'block';
        document.getElementById('medium').style.display = 'none';
        document.getElementById('long').style.display = 'none';
    }

    revealMedium ()  {
        document.getElementById('medium').style.display = 'block';
        document.getElementById('short').style.display = 'none';
        document.getElementById('long').style.display = 'none';
    }

    revealLong () {
        document.getElementById('long').style.display = 'block';
        document.getElementById('short').style.display = 'none';
        document.getElementById('medium').style.display = 'none';
    }

    render () {
        return (
            <table className='display'>
                <div className='header'>
                    <button onClick={this.revealShort}>
                        Last Month
                    </button>

                    <button onClick={this.revealMedium}>
                        Last 6 Months
                    </button>
                    
                    <button onClick={this.revealLong}>
                        All Time
                    </button>
                </div>
                <div id='short'>
                    {this.props.short.map((value, index) => {
                        return (
                            <tr key={value.name}>
                                <td className='detail'>
                                    {index + 1}
                                </td>

                                <td>
                                    <img src={value.images[2].url} alt={value.name} />
                                </td>

                                <td className='detail track'>
                                    {value.name}
                                </td>
                            </tr>
                        );
                    })}
                </div>

                <div id='medium'>
                    {this.props.med.map((value, index) => {
                        return (
                            <tr key={value.name}>
                                <td className='detail'>
                                    {index + 1}
                                </td>

                                <td>
                                    <img src={value.images[2].url} alt={value.name} />
                                </td>

                                <td className='detail track'>
                                    {value.name}
                                </td>
                            </tr>
                        );
                    })}
                </div>

                <div id='long'>
                    {this.props.long.map((value, index) => {
                        return (
                            <tr key={value.name}>
                                <td className='detail'>
                                    {index + 1}
                                </td>

                                <td>
                                    <img src={value.images[2].url} alt={value.name} />
                                </td>

                                <td className='detail track'>
                                    {value.name}
                                </td>
                            </tr>
                        );
                    })}
                </div>
            </table>
        );
    }
}