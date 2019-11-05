import Mock,{Random} from 'mockjs'

let data=Mock.mock({
    "attention|30": [{
        id: '@increment',
        title: '@ctitle(10)',
        description: '@cparagraph',
        banner: Random.image('200x100'),
        "comment|1000-9999": 1000,
        "favor|1000-9999": 1000 
    }],
    "recommend|30": [{
        id: '@increment',
        title: '@ctitle(10)',
        description: '@cparagraph',
        banner: Random.image('200x100'),
        "comment|1000-9999": 1000,
        "favor|1000-9999": 1000 
    }],
    "hot|30": [{
        id: '@increment',
        title: '@ctitle(10)',
        description: '@cparagraph',
        banner: Random.image('200x100'),
        "comment|1000-9999": 1000,
        "favor|1000-9999": 1000 
    }]
})