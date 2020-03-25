import React from 'react';
import {Bond, isBond} from "../../types/issue";
import {connect} from "react-redux";
import {State} from "../../types/store";
import {Dispatch} from "redux";

export interface BondsListProps {
    instruments: Bond[];
    fetchInstruments: () => void;
}

export class BondsListComponent extends React.Component<BondsListProps> {

}

const mapStateToProps = (state: State) => {
    const bonds = state.instruments.filter(isBond);

    return {
        instruments: bonds,
        oldStuffNobodyCaresAboutAnymore: state.something
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchInstruments: bonds,
});

export const BondsList = connect(mapStateToProps, mapDispatchToProps)(BondsListComponent);