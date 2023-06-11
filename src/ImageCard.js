import React from "react";
import './card.css';
export default function ImageCard(props) {
	return (
		<div className="p-2">
			<div class="card pt-2" style={{ width: "250px",minHeight:'300px' }}>
				<div className="justify-content-center">
					<img
						src={props.image}
						alt={props.name}
						width="80"
						height="80"
					/>
				</div>

				<div class="customCardBody">
					<div class="table">
				<table>
				<th rowSpan={2}>{props.name}</th>
				<tr>
				  <td>Price</td>
				  <td>{`$${props.current_price}`}</td>
				</tr>
				<tr>
				  <td>Rank</td>
				  <td>{`$${props.market_cap_rank}`}</td>
				</tr>
				<tr>
				  <td>Market Cap</td>
				  <td>{`$${props.market_cap}`}</td>
				</tr>
				</table>
				</div>
					{/* <h5 class="card-title">{props.name}</h5>
					<p class="">
						Price:{`$${props.current_price}`}
					</p> */}
					{/* <p class="">
						Rank:{`$${props.market_cap_rank}`}
					</p>

					<p class="">
						Market Cap:{`$${props.market_cap}`}
					</p> */}
				</div>
			</div>
		</div>
	);
}
