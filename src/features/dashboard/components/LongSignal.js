import TitleCard from "../../../components/Cards/TitleCard"
import React from 'react';
import { binanceCryptoIcons} from 'binance-icons';

function LongSignal(long){
    const data = long.long;
    var cnt = 0;
    var hasBtc = binanceCryptoIcons.has('');
    var btcIcon = binanceCryptoIcons.get('');
    const default_hasBtc = binanceCryptoIcons.has('cfx');
    const default_btcIcon = binanceCryptoIcons.get('cfx');
    return(
        <TitleCard title={"Long Signal"}>
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="normal-case text-slate-300">No</th>
                        <th className="normal-case text-slate-300">Pairs</th>
                        <th className="normal-case text-slate-300">Price</th>
                        <th className="normal-case text-slate-300">Change</th>
                        <th className="normal-case text-slate-300">1h high</th>
                        <th className="normal-case text-slate-300">1h low</th>
                        <th className="normal-case text-slate-300">Open</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(data).length ? Object.keys(data).map((keyName) => {
                            cnt++;
                            const cryptoItem = data[keyName];
                            var unKnown = keyName.slice(0, -4).toLowerCase();
                            hasBtc = binanceCryptoIcons.has(unKnown);
                            btcIcon = binanceCryptoIcons.get(unKnown);
                            if( cnt <= 5 )
                                return(
                                    <tr key={keyName}>
                                        <th className="text-slate-300">#{cnt}</th>
                                        <th className=" text-[16px] flex flex-col md:flex-row items-center  text-slate-300 uppercase">
                                            {
                                                hasBtc ? 
                                                <span dangerouslySetInnerHTML={{__html: btcIcon.replace('"32"', '"24"')}} />
                                                :
                                                <span dangerouslySetInnerHTML={{__html: default_btcIcon.replace('"32"', '"24"')}} />
                                            }{keyName.symbol.slice(0, -4)}/{keyName.symbol.slice(-4, )}
                                        </th>
                                        <td className="text-slate-300">{Number(cryptoItem.closePrice).toFixed(4)}</td>
                                        <td className="text-slate-300">{Number(cryptoItem.change).toFixed(4)} %</td>
                                        <td className="text-slate-300">{Number(cryptoItem.high).toFixed(4)}</td>
                                        <td className="text-slate-300">{Number(cryptoItem.low).toFixed(4)}</td>
                                        <td className="font-semibold text-emerald-500 badge badge-success mb-[13px]">long</td>
                                    </tr>
                                )
                            })
                            :
                            <tr>

                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            {
                !Object.keys(data).length && <p className="mt-[100px] text-center text-2xl font-bold m-auto">No Matching Data  😭</p>
            }
        </TitleCard>
    )
}

export default LongSignal