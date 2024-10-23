import * as asrJson from './cardsBySet/ASR.json' assert { type: 'json' };
import * as brsJson from './cardsBySet/BRS.json' assert { type: 'json' };
import * as bstJson from './cardsBySet/BST.json' assert { type: 'json' };
import * as celJson from './cardsBySet/CEL.json' assert { type: 'json' };
import * as creJson from './cardsBySet/CRE.json' assert { type: 'json' };
import * as crzJson from './cardsBySet/CRZ.json' assert { type: 'json' };
import * as evsJson from './cardsBySet/EVS.json' assert { type: 'json' };
import * as fstJson from './cardsBySet/FST.json' assert { type: 'json' };
import * as fut20Json from './cardsBySet/FUT20.json' assert { type: 'json' };
import * as lorJson from './cardsBySet/LOR.json' assert { type: 'json' };
import * as miscJson from './cardsBySet/MISC.json' assert { type: 'json' };
import * as mewJson from './cardsBySet/MEW.json' assert { type: 'json' };
import * as obfJson from './cardsBySet/OBF.json' assert { type: 'json' };
import * as pafJson from './cardsBySet/PAF.json' assert { type: 'json' };
import * as palJson from './cardsBySet/PAL.json' assert { type: 'json' };
import * as parJson from './cardsBySet/PAR.json' assert { type: 'json' };
import * as pgoJson from './cardsBySet/PGO.json' assert { type: 'json' };
import * as prsvJson from './cardsBySet/PR-SV.json' assert { type: 'json' };
import * as prswJson from './cardsBySet/PR-SW.json' assert { type: 'json' };
import * as scrJson from './cardsBySet/SCR.json' assert { type: 'json' };
import * as sfaJson from './cardsBySet/SFA.json' assert { type: 'json' };
import * as shfJson from './cardsBySet/SHF.json' assert { type: 'json' };
import * as sitJson from './cardsBySet/SIT.json' assert { type: 'json' };
import * as sveJson from './cardsBySet/SVE.json' assert { type: 'json' };
import * as sviJson from './cardsBySet/SVI.json' assert { type: 'json' };
import * as tefJson from './cardsBySet/TEF.json' assert { type: 'json' };
import * as twmJson from './cardsBySet/TWM.json' assert { type: 'json' };

export const allCards = [
	...asrJson.default.data,
	...brsJson.default.data,
	...bstJson.default.data,
	...celJson.default.data,
	...creJson.default.data,
	...crzJson.default.data,
	...evsJson.default.data,
	...fstJson.default.data,
	...fut20Json.default.data,
	...lorJson.default.data,
	...miscJson.default.data,
	...mewJson.default.data,
	...obfJson.default.data,
	...pafJson.default.data,
	...palJson.default.data,
	...parJson.default.data,
	...pgoJson.default.data,
	...prsvJson.default.data,
	...prswJson.default.data,
	...scrJson.default.data,
	...sfaJson.default.data,
	...shfJson.default.data,
	...sitJson.default.data,
	...sveJson.default.data,
	...sviJson.default.data,
	...tefJson.default.data,
	...twmJson.default.data,
];
