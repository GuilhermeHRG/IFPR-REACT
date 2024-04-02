import React from "react";
import "./style.css";

export default function Cronograma() {
    return (
        <div className="main2">
            <h2>Cronograma</h2>
            <table className="cronograma">
                <thead>
                    <tr>
                        <th>Atividade</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abertura do evento</td>
                        <td>01/04/2024</td>
                        <td>19:00</td>
                    </tr>
                    <tr>
                        <td>Oficina 1</td>
                        <td>09/04/2024</td>
                        <td>19:00</td>
                    </tr>
                    <tr>
                        <td>Oficina 2</td>
                        <td>05/04/2024</td>
                        <td>19:30</td>
                    </tr>
                    <tr>
                        <td>Encerramento</td>
                        <td>06/04/2024</td>
                        <td>21:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
