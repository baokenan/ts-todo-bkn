// import * as React from 'react';

// interface ITodoState {
//     inputValue: string
// }

// interface ITodoProps {
//     handleAddItem(value: string): void
// }

// export default class Header extends React.Component<ITodoProps, {}> {
//     public readonly state: Readonly<ITodoState> = {
//         inputValue: ''
//     }
// 	constructor(props: any) {
// 		super(props);
// 		// this.handleDoneItem = this.handleDoneItem.bind(this);
// 	}
//     public render() {
//         return (
//             <div className='header'>
//                 <input id="in" onChange={this.handleInputChange} value={this.state.inputValue} />
//                 <button onClick={this.handleAddItem}>add</button>
//             </div>
//         );
//     }

//     private handleInputChange = (): void => {
//         const el: HTMLInputElement | any = document.querySelector('input');

//         this.setState({
//             inputValue: el.value
//         });
//     }

//     private handleAddItem = (): void => {
//         const el: HTMLInputElement | any = document.querySelector('input');
//         this.props.handleAddItem(el.value)
//         // this.setState({
//         //     inputValue: ''
//         // }, () => {
//         //     el.focus();
//         //     this.props.handleAddItem(el.value)
//         // })

//     }
// }