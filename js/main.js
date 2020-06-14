var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click', function(){
    if (watch.isOn){
        watch.stop();
        toggleBtn.textContent = 'Stop';

    } else {
        watch.start();
        toggleBtn.textContent = 'Start';
    }
});

resetBtn.addEventListener('click',function(){
    watch.reset();
};)