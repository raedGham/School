import React from 'react';
import { BsLock } from 'react-icons/bs';


const CPModal = ({ hideModel, user, password, setPassword, hideModelAndSave }) => {
    console.log("CPModal executing");
    return (
        <div class="modal show fade" style={{ display: 'block', backgroundColor: 'rgb(0,0,0,0.8' }}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Set user password</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hideModel}></button>
                    </div>
                    <div class="modal-body">

                        <h6>{user.email}</h6>

                        <input className="form-control form-control-sm"
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={hideModel}>Close</button>
                        <button type="button" class="btn btn-primary" onClick={hideModelAndSave}>Save password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CPModal;