var $Reader=$protobuf.Reader,$Writer=$protobuf.Writer,$util=$protobuf.util;var $root=$protobuf.roots["default"]||($protobuf.roots["default"]={});$root.EventScore=(function(){function EventScore(properties){if(properties)
for(var keys=Object.keys(properties),i=0;i<keys.length;++i)
if(properties[keys[i]]!=null)
this[keys[i]]=properties[keys[i]];}
EventScore.prototype.value="";EventScore.prototype.name="";EventScore.prototype.info="";EventScore.create=function create(properties){return new EventScore(properties);};EventScore.encode=function encode(message,writer){if(!writer)
writer=$Writer.create();writer.uint32(10).string(message.value);writer.uint32(18).string(message.name);if(message.info!=null&&Object.hasOwnProperty.call(message,"info"))
writer.uint32(26).string(message.info);return writer;};EventScore.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};EventScore.decode=function decode(reader,length){if(!(reader instanceof $Reader))
reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.EventScore();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.value=reader.string();break;case 2:message.name=reader.string();break;case 3:message.info=reader.string();break;default:reader.skipType(tag&7);break;}}
if(!message.hasOwnProperty("value"))
throw $util.ProtocolError("missing required 'value'",{instance:message});if(!message.hasOwnProperty("name"))
throw $util.ProtocolError("missing required 'name'",{instance:message});return message;};EventScore.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))
reader=new $Reader(reader);return this.decode(reader,reader.uint32());};EventScore.verify=function verify(message){if(typeof message!=="object"||message===null)
return "object expected";if(!$util.isString(message.value))
return "value: string expected";if(!$util.isString(message.name))
return "name: string expected";if(message.info!=null&&message.hasOwnProperty("info"))
if(!$util.isString(message.info))
return "info: string expected";return null;};EventScore.fromObject=function fromObject(object){if(object instanceof $root.EventScore)
return object;var message=new $root.EventScore();if(object.value!=null)
message.value=String(object.value);if(object.name!=null)
message.name=String(object.name);if(object.info!=null)
message.info=String(object.info);return message;};EventScore.toObject=function toObject(message,options){if(!options)
options={};var object={};if(options.defaults){object.value="";object.name="";object.info="";}
if(message.value!=null&&message.hasOwnProperty("value"))
object.value=message.value;if(message.name!=null&&message.hasOwnProperty("name"))
object.name=message.name;if(message.info!=null&&message.hasOwnProperty("info"))
object.info=message.info;return object;};EventScore.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return EventScore;})();$root.EventStatistic=(function(){function EventStatistic(properties){this.scores=[];if(properties)
for(var keys=Object.keys(properties),i=0;i<keys.length;++i)
if(properties[keys[i]]!=null)
this[keys[i]]=properties[keys[i]];}
EventStatistic.prototype.team="";EventStatistic.prototype.scores=$util.emptyArray;EventStatistic.create=function create(properties){return new EventStatistic(properties);};EventStatistic.encode=function encode(message,writer){if(!writer)
writer=$Writer.create();writer.uint32(10).string(message.team);if(message.scores!=null&&message.scores.length)
for(var i=0;i<message.scores.length;++i)
$root.EventScore.encode(message.scores[i],writer.uint32(18).fork()).ldelim();return writer;};EventStatistic.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};EventStatistic.decode=function decode(reader,length){if(!(reader instanceof $Reader))
reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.EventStatistic();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.team=reader.string();break;case 2:if(!(message.scores&&message.scores.length))
message.scores=[];message.scores.push($root.EventScore.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}
if(!message.hasOwnProperty("team"))
throw $util.ProtocolError("missing required 'team'",{instance:message});return message;};EventStatistic.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))
reader=new $Reader(reader);return this.decode(reader,reader.uint32());};EventStatistic.verify=function verify(message){if(typeof message!=="object"||message===null)
return "object expected";if(!$util.isString(message.team))
return "team: string expected";if(message.scores!=null&&message.hasOwnProperty("scores")){if(!Array.isArray(message.scores))
return "scores: array expected";for(var i=0;i<message.scores.length;++i){var error=$root.EventScore.verify(message.scores[i]);if(error)
return "scores."+error;}}
return null;};EventStatistic.fromObject=function fromObject(object){if(object instanceof $root.EventStatistic)
return object;var message=new $root.EventStatistic();if(object.team!=null)
message.team=String(object.team);if(object.scores){if(!Array.isArray(object.scores))
throw TypeError(".EventStatistic.scores: array expected");message.scores=[];for(var i=0;i<object.scores.length;++i){if(typeof object.scores[i]!=="object")
throw TypeError(".EventStatistic.scores: object expected");message.scores[i]=$root.EventScore.fromObject(object.scores[i]);}}
return message;};EventStatistic.toObject=function toObject(message,options){if(!options)
options={};var object={};if(options.arrays||options.defaults)
object.scores=[];if(options.defaults)
object.team="";if(message.team!=null&&message.hasOwnProperty("team"))
object.team=message.team;if(message.scores&&message.scores.length){object.scores=[];for(var j=0;j<message.scores.length;++j)
object.scores[j]=$root.EventScore.toObject(message.scores[j],options);}
return object;};EventStatistic.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return EventStatistic;})();$root.EventPublish=(function(){function EventPublish(properties){this.statistics=[];if(properties)
for(var keys=Object.keys(properties),i=0;i<keys.length;++i)
if(properties[keys[i]]!=null)
this[keys[i]]=properties[keys[i]];}
EventPublish.prototype.id=$util.Long?$util.Long.fromBits(0,0,false):0;EventPublish.prototype.name="";EventPublish.prototype.home="";EventPublish.prototype.away="";EventPublish.prototype.detail="";EventPublish.prototype.info="";EventPublish.prototype.minutes=0;EventPublish.prototype.seconds=0;EventPublish.prototype.status="";EventPublish.prototype.statistics=$util.emptyArray;EventPublish.create=function create(properties){return new EventPublish(properties);};EventPublish.encode=function encode(message,writer){if(!writer)
writer=$Writer.create();writer.uint32(8).int64(message.id);writer.uint32(18).string(message.name);writer.uint32(26).string(message.home);writer.uint32(34).string(message.away);if(message.detail!=null&&Object.hasOwnProperty.call(message,"detail"))
writer.uint32(42).string(message.detail);if(message.info!=null&&Object.hasOwnProperty.call(message,"info"))
writer.uint32(50).string(message.info);if(message.minutes!=null&&Object.hasOwnProperty.call(message,"minutes"))
writer.uint32(56).int32(message.minutes);if(message.seconds!=null&&Object.hasOwnProperty.call(message,"seconds"))
writer.uint32(64).int32(message.seconds);if(message.status!=null&&Object.hasOwnProperty.call(message,"status"))
writer.uint32(74).string(message.status);if(message.statistics!=null&&message.statistics.length)
for(var i=0;i<message.statistics.length;++i)
$root.EventStatistic.encode(message.statistics[i],writer.uint32(82).fork()).ldelim();return writer;};EventPublish.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};EventPublish.decode=function decode(reader,length){if(!(reader instanceof $Reader))
reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.EventPublish();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.id=reader.int64();break;case 2:message.name=reader.string();break;case 3:message.home=reader.string();break;case 4:message.away=reader.string();break;case 5:message.detail=reader.string();break;case 6:message.info=reader.string();break;case 7:message.minutes=reader.int32();break;case 8:message.seconds=reader.int32();break;case 9:message.status=reader.string();break;case 10:if(!(message.statistics&&message.statistics.length))
message.statistics=[];message.statistics.push($root.EventStatistic.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}
if(!message.hasOwnProperty("id"))
throw $util.ProtocolError("missing required 'id'",{instance:message});if(!message.hasOwnProperty("name"))
throw $util.ProtocolError("missing required 'name'",{instance:message});if(!message.hasOwnProperty("home"))
throw $util.ProtocolError("missing required 'home'",{instance:message});if(!message.hasOwnProperty("away"))
throw $util.ProtocolError("missing required 'away'",{instance:message});return message;};EventPublish.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))
reader=new $Reader(reader);return this.decode(reader,reader.uint32());};EventPublish.verify=function verify(message){if(typeof message!=="object"||message===null)
return "object expected";if(!$util.isInteger(message.id)&&!(message.id&&$util.isInteger(message.id.low)&&$util.isInteger(message.id.high)))
return "id: integer|Long expected";if(!$util.isString(message.name))
return "name: string expected";if(!$util.isString(message.home))
return "home: string expected";if(!$util.isString(message.away))
return "away: string expected";if(message.detail!=null&&message.hasOwnProperty("detail"))
if(!$util.isString(message.detail))
return "detail: string expected";if(message.info!=null&&message.hasOwnProperty("info"))
if(!$util.isString(message.info))
return "info: string expected";if(message.minutes!=null&&message.hasOwnProperty("minutes"))
if(!$util.isInteger(message.minutes))
return "minutes: integer expected";if(message.seconds!=null&&message.hasOwnProperty("seconds"))
if(!$util.isInteger(message.seconds))
return "seconds: integer expected";if(message.status!=null&&message.hasOwnProperty("status"))
if(!$util.isString(message.status))
return "status: string expected";if(message.statistics!=null&&message.hasOwnProperty("statistics")){if(!Array.isArray(message.statistics))
return "statistics: array expected";for(var i=0;i<message.statistics.length;++i){var error=$root.EventStatistic.verify(message.statistics[i]);if(error)
return "statistics."+error;}}
return null;};EventPublish.fromObject=function fromObject(object){if(object instanceof $root.EventPublish)
return object;var message=new $root.EventPublish();if(object.id!=null)
if($util.Long)
(message.id=$util.Long.fromValue(object.id)).unsigned=false;else if(typeof object.id==="string")
message.id=parseInt(object.id,10);else if(typeof object.id==="number")
message.id=object.id;else if(typeof object.id==="object")
message.id=new $util.LongBits(object.id.low>>>0,object.id.high>>>0).toNumber();if(object.name!=null)
message.name=String(object.name);if(object.home!=null)
message.home=String(object.home);if(object.away!=null)
message.away=String(object.away);if(object.detail!=null)
message.detail=String(object.detail);if(object.info!=null)
message.info=String(object.info);if(object.minutes!=null)
message.minutes=object.minutes|0;if(object.seconds!=null)
message.seconds=object.seconds|0;if(object.status!=null)
message.status=String(object.status);if(object.statistics){if(!Array.isArray(object.statistics))
throw TypeError(".EventPublish.statistics: array expected");message.statistics=[];for(var i=0;i<object.statistics.length;++i){if(typeof object.statistics[i]!=="object")
throw TypeError(".EventPublish.statistics: object expected");message.statistics[i]=$root.EventStatistic.fromObject(object.statistics[i]);}}
return message;};EventPublish.toObject=function toObject(message,options){if(!options)
options={};var object={};if(options.arrays||options.defaults)
object.statistics=[];if(options.defaults){if($util.Long){var long=new $util.Long(0,0,false);object.id=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else
object.id=options.longs===String?"0":0;object.name="";object.home="";object.away="";object.detail="";object.info="";object.minutes=0;object.seconds=0;object.status="";}
if(message.id!=null&&message.hasOwnProperty("id"))
if(typeof message.id==="number")
object.id=options.longs===String?String(message.id):message.id;else
object.id=options.longs===String?$util.Long.prototype.toString.call(message.id):options.longs===Number?new $util.LongBits(message.id.low>>>0,message.id.high>>>0).toNumber():message.id;if(message.name!=null&&message.hasOwnProperty("name"))
object.name=message.name;if(message.home!=null&&message.hasOwnProperty("home"))
object.home=message.home;if(message.away!=null&&message.hasOwnProperty("away"))
object.away=message.away;if(message.detail!=null&&message.hasOwnProperty("detail"))
object.detail=message.detail;if(message.info!=null&&message.hasOwnProperty("info"))
object.info=message.info;if(message.minutes!=null&&message.hasOwnProperty("minutes"))
object.minutes=message.minutes;if(message.seconds!=null&&message.hasOwnProperty("seconds"))
object.seconds=message.seconds;if(message.status!=null&&message.hasOwnProperty("status"))
object.status=message.status;if(message.statistics&&message.statistics.length){object.statistics=[];for(var j=0;j<message.statistics.length;++j)
object.statistics[j]=$root.EventStatistic.toObject(message.statistics[j],options);}
return object;};EventPublish.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return EventPublish;})();