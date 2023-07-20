
import { useContext } from "react";
import Cartcontext from "../CartContext";
import "./Cart.css";

const Carts = () => {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;

    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    return (
        <div className="cart">
            {state.map((item, index) => {
                return (
                    <div className="cards" key={index}>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                        <p>GHC {item.quantity * item.price}</p>
                        <div className="quantity">
                            <button className='btn btn-secondary'
                                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                                +
                            </button>
                            <p>{item.quantity}</p>
                            <button className='btn btn-secondary'
                                onClick={() => {
                                    if (item.quantity > 1) {
                                        dispatch({ type: "DECREASE", payload: item });
                                    } else {
                                        dispatch({ type: "REMOVE", payload: item });
                                    }
                                }}>
                                -
                            </button>
                        </div>
                        <div className="cancel" onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                            x
                        </div>
                    </div>
                );
            })}
            {state.length > 0 && (
                <div className="total">
                    <h2>GHC {total}</h2>
                </div>
            )}
        </div>
    );
};

export default Carts;
