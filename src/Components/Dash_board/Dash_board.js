import React from 'react'

export default function Dash_board() {
    return (
        <div>
            <p>Dash_board</p>
            

				<div className="container-fluid">
					
					<div className="col col-md-9">
						<div className="row">
							<div className="col col-md-5">
								<h4>Today View Stats:</h4>
										Visits<span className="pull-right strong">&nbsp; 15</span>
										 <div className="progress">
											<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="15"aria-valuemin="0" aria-valuemax="100" style={{width:"15%"}}>15%</div>
										</div>
									
										New Views<span className="pull-right strong">&nbsp;30</span>
										 <div className="progress">
											<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30"aria-valuemin="0" aria-valuemax="100" style={{width:"30%"}}>30%</div>
										</div>
									
										Total Views<span className="pull-right strong">&nbsp; 8</span>
										 <div className="progress">
											<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="8"aria-valuemin="0" aria-valuemax="100" style={{width:"8%"}}>8%</div>
										</div>
							</div>
							<div className="col col-md-5">
								<h4>This Month Views Stats:</h4>
										Visits<span className="pull-right strong">&nbsp; 45</span>
										 <div className="progress">
											<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="45"aria-valuemin="0" aria-valuemax="100" style={{width:"45%"}}>45%</div>
										</div>
									
										New Views<span className="pull-right strong">&nbsp; 57</span>
										 <div className="progress">
											<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="57"aria-valuemin="0" aria-valuemax="100" style={{width:"57%"}}>57%</div>
										</div>
									
										Total Views<span className="pull-right strong">&nbsp; 25</span>
										 <div className="progress">
											<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="25"aria-valuemin="0" aria-valuemax="100" style={{width:"25%"}}>25%</div>
										</div>
							</div>
						</div>
					</div>
				</div> 
        </div>
    )
}
