window.onload = function () {

    var speed = 10; //����ͼƬ�����ٶ�Ϊ10����
    picScroll = document.getElementById("picScroll");//��ȡ�����������
    picScroll1 = document.getElementById("picScroll1");//��ȡ������ݵ�����
    picscroll2 = document.getElementById("picScroll2");//��ȡ��ʱ������ݵ�����

    picscroll2.innerHTML = picScroll1.innerHTML;//�����������������2

    var ID = setInterval(changeToLeft, speed);//ÿspeed���룬����Ų��һ��

    //2����꾭��ʱ��ͣͼƬ����
    picScroll.onmouseover = function () {
        clearInterval(ID);
    }
    //3������뿪��ͼƬ��������
    picScroll.onmouseout = function () {
        ID = setInterval(changeToLeft, speed);
    }


};
//1��ͼƬ�����������ʵ��
function changeToLeft() {

    if (picScroll.scrollLeft >= (picScroll1.offsetWidth)) {
        picScroll.scrollLeft = 0;
    }
    else {
        picScroll.scrollLeft += 1;
    }
}

function submit() {
    var picF2 = document.getElementById('bu');
    if (picF2.value == "") {
        alert("error!please input a string");
    }
}
