  /**
	* 游戏公用方法汇总
	* by dily
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* 使用方法如：Global.setCookie()
    */

module Global {

	//等待界面，主要用在通讯等待展示
	export var waitPanel:WaitPanel;
    //显示等待界面
    export function showWaritPanel(): void {
        Global.waitPanel = new WaitPanel(1);
        GameLayerManager.gameLayer().maskLayer.removeChildren();
        GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
    }
    
    //移除界面
    export function hideWaritPanel(): void {
        if((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)){
            GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
        }
    }

    //获取html文本
    export function getTextFlow(str:string): egret.ITextElement[] {
        var styleParser = new egret.HtmlTextParser();
        return styleParser.parser(str);
    }
    
    export var message;
    export function getMessage(fileName:string,reqName:string): any {
        if(message == null){
            //初始化template_proto
            Global.message = dcodeIO.ProtoBuf.loadProto(RES.getRes(fileName+"_proto"));
        }
        return message.build(reqName);
    }

	//获取大写数字
	export function getNumber(num:number):string {
		switch (num)
		{
		    case 0: {
		        return "零";
		    }
		    case 1: {
		        return "一";
		    }
		    case 2: {
		        return "二";
		    }
		    case 3: {
		        return "三";
		    }
		    case 4: {
		        return "四";
		    }
		    case 5: {
		        return "五";
		    }
		    case 6: {
		        return "六";
		    }
		    case 7: {
		        return "七";
		    }
		    case 8: {
		        return "八";
		    }
		    case 9: {
		        return "九";
		    }
		    default: {
		        // TODO: Implemente default case
		        console.log("default case");
		    }
		}
	}
}